//Programming Challenge
            //On Your Own:    ch. 6
            //Description:
			//Create a html sign-in page for a website. The page should obtain the following information: 
			//the user’s first and last names, street address, city, state, zip code, email address, and phone number. 
			//The phone number should be entered in the form (XXX)XXX-XXXX (where X is a digit). 
			//Validate the phone number entry to ensure that the user has entered 10 digits with the area code in parentheses 
			//and the three-digit extension separated from the last four digits by a hyphen. Save your page as sign_in2.
			//html and be sure to include an appropriate page title.
			//part2
			//Add a username and password to PartA. The username should be between 4 and 20 characters. 
			//The password should be between 4 and 12 characters, contain at least one digit, and 
			//contain at least one uppercase and one lowercase character.
			//Select four special characters and require that the password contain at least one of them. 
			//Save your page as sign_in3.html and be sure to include an appropriate page title.
			
                       
            //Created by: Jerry French  
						csc240
            //Created on: 4/6/2022,
			
			
function submitclicked(){
	//fetching id
	var phone = document.getElementById('phone');		
	phoneNumber = phone.value;
	
	
	
	//alert("Your Phone# is " + phoneNumber);

	}