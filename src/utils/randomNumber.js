import { getCurrentTime } from "./getDatenTime"

export const randomNumber=()=>{
    const firstNumber=(getCurrentTime().slice(0,5)[0])
    const lastNumber=(getCurrentTime().slice(0,5)[4])
    const num=firstNumber+lastNumber
    

    return num + generateCaptcha();

}

  function generateCaptcha() {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    const randomChar = (chars) =>
      chars.charAt(Math.floor(Math.random() * chars.length));

    return (
      randomChar(upper) +
      randomChar(lower) +
      randomChar(upper) +
      randomChar(special) 
    //   randomChar(special) +
    //   randomChar(numbers)
    );
  }
