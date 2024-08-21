import chalk from "chalk";
import inquirer from "inquirer";
//var prompt=require("prompt-sync")();
let stuName:String[]=["Rao Wakeel","Adeel","Azeeem","Naeem","Latif"]
let stuRollNo:number[]=[234,235,236,237,237]

let Name=await inquirer.prompt(
    {
        message:"Enter Your Name :",
        type:"input",
        name:"Stuname"
    }
)
let RollNo=await inquirer.prompt(
    {
        message:"Enter Your Roll No:",
        type:"input",
        name:"rollno"
    }
)
//let RollNo:number=parseInt(prompt("import chalk from ))

if(Name.Stuname==stuName[0] && RollNo.rollno==stuRollNo[0]){
    let phyNum=await inquirer.prompt(
        {
            message:"How Much Number You Get In Physics :",
            type:"number",
            name:"PhysicsNo"
        }
    )   
    let MathNum=await inquirer.prompt(
        {
            message:"How Much Number You Get In Math:",
            type:"number",
            name:"MathNo"
        }
    )   
    let ComNum=await inquirer.prompt(
        {
            message:"How Much Number You Get In Computer :",
            type:"number",
            name:"ComputerNo"
        }
    )   
    console.log(chalk.underline.italic.bgGray.yellow(`Your Marksheet`));
if(phyNum.PhysicsNo<=33){
    console.log("You are failed in Physics");   
}else{
    console.log(`You are Pass in Physics and Your marks in Physics ${phyNum.PhysicsNo} out of 100`);
}
if(MathNum.MathNo<=33){
    console.log("you are failes in Mathematics");
}else{
    console.log(`You are Pass in Math and Your marks in Maths ${MathNum.MathNo} out of 100`);
}
if(ComNum.ComputerNo<=33){
    console.log("you are failed in Computer");
}else{
    console.log(`You are Pass in Computer and Your marks in Computer ${ComNum.ComputerNo} out of 100`);

}
if(phyNum.PhysicsNo<=33 || MathNum.MathNo<=33 || ComNum.ComputerNo<=33){
    console.log(chalk.green.bold('STATUS :',chalk.red.italic("FAIL")));
}else{
    console.log(chalk.green.bold('STATUS :',chalk.red.italic("PASS")));
    
}

//   console.log(chalk.underline.italic.bgGray.yellow(`Your Marksheet`));

//   console.log(`Your marks in Physics ${phyNum.PhysicsNo} out of 100`);
//   console.log(`Your marks in Maths ${MathNum.MathNo} out of 100`);
//   console.log(`Your marks in Computer ${ComNum.ComputerNo} out of 100`);

let sum=phyNum.PhysicsNo+MathNum.MathNo+ComNum.ComputerNo
let percentage=sum/300*100
console.log('Percentage :',percentage);

}
//second candidate
if(Name.Stuname==stuName[1] && RollNo.rollno==stuRollNo[1]){
    let phyNum=await inquirer.prompt(
        {
            message:"How Much Number You Get In Physics :",
            type:"number",
            name:"PhysicsNo"
        }
    )   
    let MathNum=await inquirer.prompt(
        {
            message:"How Much Number You Get In Math:",
            type:"number",
            name:"MathNo"
        }
    )   
    let ComNum=await inquirer.prompt(
        {
            message:"How Much Number You Get In Computer :",
            type:"number",
            name:"ComputerNo"
        }
    )   

  console.log(chalk.underline.italic.bgGray.yellow(`Your Marksheet`));

  if(phyNum.PhysicsNo<=33){
    console.log("You are failed in Physics");   
}else{
    console.log(`You are Pass in Physics and Your marks in Physics ${phyNum.PhysicsNo} out of 100`);
}
if(MathNum.MathNo<=33){
    console.log("you are failed in Mathematics");
}else{
    console.log(`You are Pass in Math and Your marks in Maths ${MathNum.MathNo} out of 100`);
}
if(ComNum.ComputerNo<=33){
    console.log("you are failed in Computer");
}else{
    console.log(`You are Pass in Computer and Your marks in Computer ${ComNum.ComputerNo} out of 100`);

}
if(phyNum.PhysicsNo<=33 || MathNum.MathNo<=33 || ComNum.ComputerNo<=33){
    console.log(chalk.green.bold('STATUS :',chalk.red.italic("FAIL")));
}else{
    console.log(chalk.green.bold('STATUS :',chalk.red.italic("PASS")));
    
}
let sum=phyNum.PhysicsNo+MathNum.MathNo+ComNum.ComputerNo
let percentage=sum/300*100
console.log('Percentage :',percentage);

}
//third candidate
if(Name.Stuname==stuName[2] && RollNo.rollno==stuRollNo[2]){
    let phyNum=await inquirer.prompt(
        {
            message:"How Much Number You Get In Physics :",
            type:"number",
            name:"PhysicsNo"
        }
    )   
    let MathNum=await inquirer.prompt(
        {
            message:"How Much Number You Get In Math:",
            type:"number",
            name:"MathNo"
        }
    )   
    let ComNum=await inquirer.prompt(
        {
            message:"How Much Number You Get In Computer :",
            type:"number",
            name:"ComputerNo"
        }
    )   

  console.log(chalk.underline.italic.bgGray.yellow(`Your Marksheet`));

  if(phyNum.PhysicsNo<=33){
    console.log("You are failed in Physics");   
}else{
    console.log(`You are Pass in Physics and Your marks in Physics ${phyNum.PhysicsNo} out of 100`);
}
if(MathNum.MathNo<=33){
    console.log("you are failes in Mathematics");
}else{
    console.log(`You are Pass in Math and Your marks in Maths ${MathNum.MathNo} out of 100`);
}
if(ComNum.ComputerNo<=33){
    console.log("you are failed in Computer");
}else{
    console.log(`You are Pass in Computer and Your marks in Computer ${ComNum.ComputerNo} out of 100`);

}
if(phyNum.PhysicsNo<=33 || MathNum.MathNo<=33 || ComNum.ComputerNo<=33){
    console.log(chalk.green.bold('STATUS :',chalk.red.italic("FAIL")));
}else{
    console.log(chalk.green.bold('STATUS :',chalk.red.italic("PASS")));
    
}
let sum=phyNum.PhysicsNo+MathNum.MathNo+ComNum.ComputerNo
let percentage=sum/300*100
console.log('Percentage :',percentage);

}
//third candidate
if(Name.Stuname==stuName[3] && RollNo.rollno==stuRollNo[3]){
    let phyNum=await inquirer.prompt(
        {
            message:"How Much Number You Get In Physics :",
            type:"number",
            name:"PhysicsNo"
        }
    )   
    let MathNum=await inquirer.prompt(
        {
            message:"How Much Number You Get In Math:",
            type:"number",
            name:"MathNo"
        }
    )   
    let ComNum=await inquirer.prompt(
        {
            message:"How Much Number You Get In Computer :",
            type:"number",
            name:"ComputerNo"
        }
    )   

  console.log(chalk.underline.italic.bgGray.yellow(`Your Marksheet`));
  if(phyNum.PhysicsNo<=33){
    console.log("You are failed in Physics");   
}else{
    console.log(`You are Pass in Physics and Your marks in Physics ${phyNum.PhysicsNo} out of 100`);
}
if(MathNum.MathNo<=33){
    console.log("you are failes in Mathematics");
}else{
    console.log(`You are Pass in Math and Your marks in Maths ${MathNum.MathNo} out of 100`);
}
if(ComNum.ComputerNo<=33){
    console.log("you are failed in Computer");
}else{
    console.log(`You are Pass in Computer and Your marks in Computer ${ComNum.ComputerNo} out of 100`);

}
if(phyNum.PhysicsNo<=33 || MathNum.MathNo<=33 || ComNum.ComputerNo<=33){
    console.log(chalk.green.bold('STATUS :',chalk.red.italic("FAIL")));
}else{
    console.log(chalk.green.bold('STATUS :',chalk.red.italic("PASS")));
    
}
let sum=phyNum.PhysicsNo+MathNum.MathNo+ComNum.ComputerNo
let percentage=sum/300*100
console.log('Percentage :',percentage);

}
//fourth candidate
if(Name.Stuname==stuName[4] && RollNo.rollno==stuRollNo[4]){
    let phyNum=await inquirer.prompt(
        {
            message:"How Much Number You Get In Physics :",
            type:"number",
            name:"PhysicsNo"
        }
    )   
    let MathNum=await inquirer.prompt(
        {
            message:"How Much Number You Get In Math:",
            type:"number",
            name:"MathNo"
        }
    )   
    let ComNum=await inquirer.prompt(
        {
            message:"How Much Number You Get In Computer :",
            type:"number",
            name:"ComputerNo"
        }
    )   

  console.log(chalk.underline.italic.bgGray.yellow(`Your Marksheet`));

 if(phyNum.PhysicsNo<=33){
    console.log("You are failed in Physics");   
}else{
    console.log(`You are Pass in Physics and Your marks in Physics ${phyNum.PhysicsNo} out of 100`);
}
if(MathNum.MathNo<=33){
    console.log("you are failes in Mathematics");
}else{
    console.log(`You are Pass in Math and Your marks in Maths ${MathNum.MathNo} out of 100`);
}
if(ComNum.ComputerNo<=33){
    console.log("you are failed in Computer");
}else{
    console.log(`You are Pass in Computer and Your marks in Computer ${ComNum.ComputerNo} out of 100`);

}
if(phyNum.PhysicsNo<=33 || MathNum.MathNo<=33 || ComNum.ComputerNo<=33){
    console.log(chalk.green.bold('STATUS :',chalk.red.italic("FAIL")));
}else{
    console.log(chalk.green.bold('STATUS :',chalk.red.italic("PASS")));
    
}
let sum=phyNum.PhysicsNo+MathNum.MathNo+ComNum.ComputerNo
let percentage=sum/300*100
console.log('Percentage :',percentage);

}