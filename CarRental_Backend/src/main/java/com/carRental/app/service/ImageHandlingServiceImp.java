package com.carRental.app.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.carRental.app.Entities.Car;
import com.carRental.app.customException.ResourceNotFoundException;
import com.carRental.app.dao.CarRepository;
import com.carRental.app.dto.CarDto;

@Service
@Transactional
public class ImageHandlingServiceImp implements ImageHandlingService{

	@Autowired
	private CarRepository carRepo;
	@Autowired
	private ModelMapper mapper;
	
	@Value("${file.upload.folder}")
	private String folder;
	
	@PostConstruct
	public void init() {
		File file=new File(folder);
		if(!file.exists()) {
			file.mkdirs();
		}
	}

	@Override
	public Car uploadImage(Long carId, MultipartFile image) throws IOException  {
		Car car=carRepo.findById(carId).orElseThrow(()->new ResourceNotFoundException("Invalid CarId"));
		String imagePath = folder.concat(File.separator).concat(image.getOriginalFilename());
		Files.copy(image.getInputStream(), Paths.get(imagePath), StandardCopyOption.REPLACE_EXISTING);
		car.setCarImage(imagePath);
		carRepo.save(car);
		return car;
	}
}
