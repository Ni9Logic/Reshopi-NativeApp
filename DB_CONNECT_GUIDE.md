EC2:
instance:  ec2-52-90-141-71.compute-1.amazonaws.com
connection command sample:
ssh -i "mkaits.pem" ubuntu@ec2-52-90-141-71.compute-1.amazonaws.com

RDS:
writer instance: development.cjgwskuao5ka.us-east-1.rds.amazonaws.com
read instance: readerdev.cjgwskuao5ka.us-east-1.rds.amazonaws.com

user: reshopiadm 
pass: preM0sho86%$
schema: reshopcl_web

sample command connection: 

mysql -h development-cluster.cluster-cjgwskuao5ka.us-east-1.rds.amazonaws.com -u reshopiadm -preM0sho86%$

Tunnel CMD
ssh -i "mkaits.pem" -N -L 3307:development-cluster.cluster-cjgwskuao5ka.us-east-1.rds.amazonaws.com:3306 ubuntu@ec2-52-90-141-71.compute-1.amazonaws.com
