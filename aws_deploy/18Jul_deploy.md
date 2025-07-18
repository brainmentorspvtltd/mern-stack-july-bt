# AWS EC2 Deployment + GitHub Integration + Nginx Hosting
## 1. Create AWS Account and Login Setup
- Go to https://aws.amazon.com and create an account.
- Complete Two-Factor Authentication (2FA) during login.
	- Search and open IAM to manage users, roles, and permissions (skip if not required right now).
## 2. Launch EC2 Instance
- Go to EC2 from AWS Console search.
- Click Launch Instance.
- Name: MyInstance
- OS (AMI): Amazon Linux 
- Instance Type: t3.micro (Free tier)
- Key Pair: Create or select .pem file
- Networking: Default VPC, allow HTTP/HTTPS/SSH
- Click Launch Instance.
- After launch, go to Running Instances.
- Note the Public IPv4 address.
- Click Connect, go to the SSH Client tab.
- Copy 1st command (chmod)
- Copy 3rd command (ssh to instance)
## 3. Connect from Local Machine (Git Bash or Terminal)
- Open Git Bash where your .pem key file is stored.
```bash 
chmod 400 my-key.pem 
ssh -i "my-key.pem" ec2-user@<your-public-ip>
```
## 4. Install NGINX and Git on EC2
```bash 
sudo dnf install nginx -y 
sudo dnf install git -y
```
## 5. Create GitHub Repository and Push Code
- Go to https://github.com and create a new repository.
- In your local project folder, run:
```bash 
git init 
git add . 
git commit -m "Initial commit" 
git branch -M main 
git remote add origin https://github.com/username/repo-name.git 
git push -u origin main
```
## 6. GitHub Pages (Optional - Without AWS)
- Go to repository Settings → Pages
- Select Branch: main and folder / (root)
- Your site will be live at https://username.github.io/repo-name
## 7. Clone GitHub Repo on EC2
```bash 
cd /home/ec2-user 
git clone https://github.com/username/repo-name.git 
```
## 8. Deploy to NGINX Web Server
```bash 
cd /usr/share/nginx/html 
sudo su systemctl stop nginx 
rm -rf *.* 
rm -rf icons 
cp -r /home/ec2-user/repo-name/* /usr/share/nginx/html/ 
systemctl start nginx 
```
- Your site should now be live at:

```plaintext
http://<your-ec2-public-ip>
```
