# NOAA Real-Time Mesoscale Analysis (RTMA)
## Stream data with DDA:
```
from dagshub.streaming import DagsHubFilesystem

fs = DagsHubFilesystem(".", repo_url="https://dagshub.com/DagsHub-Datasets/noaa-rtma-dataset")

fs.listdir("s3://noaa-rtma-pds")
```

## Description: 
The Real-Time Mesoscale Analysis (RTMA) is a NOAA National Centers For Environmental Prediction (NCEP) high-spatial and temporal resolution analysis/assimilation system for near-surf ace weather conditions. Its main component is the NCEP/EMC Gridpoint Statistical Interpolation (GSI) system applied in two-dimensional variational mode to assimilate conventional and satellite-derived observations.<br/><br/>
The RTMA was developed to support NDFD operations and provide field forecasters with high quality analyses for nowcasting, situational awareness, and forecast verification purposes. The system produces hourly analyses at 2. 5 km resolution for the Conus NDFD grid, 3 km for the Alaska NDFD grid and 2.5 km for the Hawaii, Puerto-Rico and Guam NDFD grids.<br/><br/>
Data is available from the start of 2019 until present.
## Contact: 
The Real-Time Mesoscale Analysis (RTMA) is a NOAA National Centers For Environmental Prediction (NCEP) high-spatial and temporal resolution analysis/assimilation system for near-surf ace weather conditions. Its main component is the NCEP/EMC Gridpoint Statistical Interpolation (GSI) system applied in two-dimensional variational mode to assimilate conventional and satellite-derived observations.<br/><br/>
The RTMA was developed to support NDFD operations and provide field forecasters with high quality analyses for nowcasting, situational awareness, and forecast verification purposes. The system produces hourly analyses at 2. 5 km resolution for the Conus NDFD grid, 3 km for the Alaska NDFD grid and 2.5 km for the Hawaii, Puerto-Rico and Guam NDFD grids.<br/><br/>
Data is available from the start of 2019 until present.
## Update Frequency: 
Hourly
## Managed By: 
http://www.noaa.gov/
## Collabs: 
- ASDI: 
	- Tags: weather
## Resources: 
1. resource: 
	- Description: Real-Time Mesoscale Analysis (RTMA) Data
	- ARN: arn:aws:s3:::noaa-rtma-pds
	- Region: us-east-1
	- Type: S3 Bucket
	- Explore: [Browse Bucket](https://noaa-rtma-pds.s3.amazonaws.com/index.html)
2. resource: 
	- Description: New data notifications for RTMA data, only Lambda and SQS protocols allowed
	- ARN: arn:aws:sns:us-east-1:123901341784:NewNCEPRTMAObject
	- Region: us-east-1
	- Type: SNS Topic

## Tags: 
[aws-pds](#aws-pds), [agriculture](#agriculture), [climate](#climate), [meteorological](#meteorological), [sustainability](#sustainability), [weather](#weather)