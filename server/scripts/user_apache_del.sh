#!/bin/bash
# Script to add a user to Linux system
username=$1

a2dissite $username.conf
service apache2 reload
userdel $username
rm /etc/apache2/sites-available/$username.conf
rm -R /home/$username/
