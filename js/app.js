let UserName, UserAge, WelcomingMsg, UserGender;

UserName = prompt("enter your name please ");
UserGender = prompt("enter your gender please");
UserAge = prompt("enter your age please ");
CheckAge(UserAge);
WelcomingMsg = confirm("Do you wants to skip the welcoming message?")
Welcomingfunction(WelcomingMsg);
//////////////////////////////////////////////////////// #2

function AskQuestion(Question) {
    let QusPrompt = prompt(Question);
    if (QusPrompt.toUpperCase === "YES" || QusPrompt.toUpperCase === "NO") return QPrompt;
    if (QusPrompt == "") return "invalid";
    else return QusPrompt;
}
const Answers = [];
Answers[0] = AskQuestion(" Do you like my website?");
Answers[1] = AskQuestion("Do you have hobbies  ?");
Answers[2] = AskQuestion("Do you have a car ?"); print_Answers();
function print_Answers() {
    for (let i = 0; i < Answers.length; i++) {
        console.log(Answers[i]);
    };
}
function Welcomingfunction(Welcome) {
    if (!Welcome) { PrintWelcomingMsg(); }
}
function CheckGender(Gender) {
    if (Gender.toUpperCase() == "FEMALE") { return "Ms "; }
    else if (Gender.toUpperCase() == "MALE") { return "Mr "; }
    else return " ";
}
function CheckAge(Age) {
    if (Age <= 0 || Age == null) {
        alert("The age should be avalid value.....");
    }
}
function PrintWelcomingMsg() {
    console.log("hey " + CheckGender(UserGender) + UserName);
    alert("hey " + CheckGender(UserGender) + UserName);
}
