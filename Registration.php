<?php
 session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>create Account</title>

    <link rel="stylesheet" href="Registration.css">
    <link rel="stylesheet" href="./fontawesome-free-6.0.0-beta3-web/css/all.min.css">
</head>

<body>
    <?php
    //  $_SESSION["name"] = "daniel";
    
    ?>
<?php
        $Fname = $Lname = $Email = $Password = $ConfirmPassword = $PhoneNumber = $Gender = $Addres = "";
        $FnameErr = $LnameErr = $EmailErr = $PasswordErr = $ConfirmPasswordErr = $PhoneNumberErr = $GenderErr = $AddressErr = "";
        // $Fname = test_input($_POST["Fname"]);
        // $Lname = test_input($_POST["Lname"]);
        // $Email = test_input($_POST["Email"]);
        // $Password = test_input($_POST["Password"]);
        // $ConfirmPassword = test_input($_POST["ConfirmPassword"]);
        // $PhoneNumber = test_input($_POST["PhoneNumber"]);
        // $Gender = test_input($_POST["Gender"]);
        // $Address = test_input($_POST["Address"]);
        //Error Messages
        // $FnameErr = "Invalid Name";
        // $LnameErr = "Invalid Name";
        // $EmailErr = "Invalid Email";
        // $PasswordErr = "Password Must be upto eight and contain atlist one upper n lowercase letters";
        // $ConfirmPasswordErr = "Not Matching with Password";
        // $PhoneNumberErr = "Invalid";
        // $GenderErr = "Select Gender";
        // $AddressErr = "Enter a Valid Address";


        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            $Fname = test_input($_POST["Fname"]);
            if(!preg_match("/^[a-zA-Z-' ]*$/",$Fname)){
                $FnameErr = "Enter a Valid Name";
            }else{
                $Fname = test_input($_POST['Fname']);
            }

            $Lname = test_input($_POST["Lname"]);
            if(!preg_match("/^[a-zA-Z-' ]*$/",$Lname)){
                $LnameErr = "LastName required";
            }else{ 
                $Lname = test_input($_POST['Lname']);
            }

            $Email = test_input($_POST["Email"]);
            if(!filter_var($Email, FILTER_VALIDATE_EMAIL)){
                $EmailErr = "Invalid Email Address";
            }else{ 
                $Email = test_input($_POST['Email']);
            }

            $Password = test_input($_POST["Password"]);
            if(empty($_POST['Password'])){
                $PasswordErr = "Password required";
            }else{ 
                $Password = test_input($_POST['Password']);
            }

            $ConfirmPassword = test_input($_POST["ConfirmPassword"]);
            if($ConfirmPassword !== $Password){
                $ConfirmPassswordErr = "Doesn't match password";
            }else{ 
                $ConfirmPassword = test_input($_POST['ConfirmPassword']);
            }

            $PhoneNumber = test_input($_POST["PhoneNumber"]);
            if(empty($_POST['PhoneNumber'])){
                $PhoneNumberErr = "Mobile Number is required";
            }else{ 
                $PhoneNumber = test_input($_POST['PhoneNumber']);
            }

            $Gender = test_input($_POST["Gender"]);
            if(empty($_POST['Gender'])){
                $GenderErr = "Please Select Your Gender";
            }else{ 
                $Gender = test_input($_POST['Gender']);
            }

            $Address = test_input($_POST["Address"]);
            if(empty($_POST['Address'])){
                $AddressErr = "Address required";
            }else{ 
                $Address = test_input($_POST['Address']);
            }

        }

    ?> 

    <?php 
        function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
          }
    ?>

    <div class="wrapper"> 
        <div class="title">
        <span><img src="./images/logoNG003.png"></span>Create Account</div>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <div class="form">

                <div class="input_field">
                    <!-- <label>First Name</label> -->
                    <span class='error'><?php echo $FnameErr;?></span>
                    <input type="text" class="input" name="Fname" placeholder="First Name" value="<?php echo $Fname;?>" required>
                </div>

                <div class="input_field">
                    <!-- <label>Last Name</label> -->
                    <span class='error'><?php echo $LnameErr;?></span>
                    <input type="text" class="input" name="Lname" placeholder="Last Name" value="<?php echo $Lname;?>" required>
                </div>

                <div class="input_field">
                    <!-- <label>Email</label> -->
                    <span class='error'><?php echo $EmailErr;?></span>
                    <input type="text" class="input" name="Email" placeholder="Email" value="<?php echo $Email;?>" required>
                </div>

                <div class="input_field">
                    <!-- <label>Password</label> -->
                    <span class='error'><?php echo $PasswordErr;?></span>
                    <input type="password" class="input" name="Password" placeholder="Password" value="<?php echo $Password;?>" required>
                </div>

                <div class="input_field">
                    <!-- <label>Confirm Password</label> -->
                    <span class='error'><?php echo $ConfirmPasswordErr;?></span>
                    <input type="password" class="input" name="ConfirmPassword" placeholder="Confirm Password" value="<?php echo $ConfirmPassword;?>" required>
                </div>

                <!-- <div class="input_field">
                <span class='error' required><?php echo $GenderErr;?></span>
                Gender 
                    <div class="custom_select">
                        <select name="Gender">
                            <option value="">select</option>
                            <option value="male" type='radio'>Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div> -->

                Gender:
                <input type="radio" name="Gender"
                <?php if (isset($Gender) && $Gender=="female") echo "checked";?>
                value="female">Female
                <input type="radio" name="Gender"
                <?php if (isset($Gender) && $Gender=="male") echo "checked";?>
                value="male">Male
                

                <div class="input_field">
                    <!-- <label>Phone Number</label> -->
                    <span class='error'><?php echo $PhoneNumberErr;?></span>
                    <input type="text" class="input" name="PhoneNumber" placeholder="Phone Number" value="<?php echo $PhoneNumber;?>" required>
                </div>

                <div class="input_field">
                    <!-- <label>Address</label> -->
                    <span class='error'><?php echo $AddressErr;?></span>
                    <textarea class="textarea" name="Address" placeholder="Address" value="<?php echo $Address;?>" required></textarea>
                </div>

                <div class="input_field">
                    <label class="check">
                        <input type="checkbox">
                        <span class="checkmark"></span> 
                    </label>
                    <p>I accept the <a href="">Terms & Condition</a></p>
                </div>

                <div class="input_field">
                    <i class="fas fa-envelope icon"></i>
                    <input type="submit" value="CREATE ACCOUNT" class="btn" >
                </div>
                <p class="horitontal">OR</p>

                <div class="input_field">
                    <i class="fab fa-facebook-f icon2"></i>
                    <input type="submit" value="CONNECT WITH FACEBOOK" class="btn2" >
                </div>
            </div>
        </form>  
    </div>
</body>

</html>