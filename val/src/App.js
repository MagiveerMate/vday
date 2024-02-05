import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Set the current date and time
    const currentDate = new Date().getTime();

    // Set the date we're counting down to (February 14th, current year, 00:00:00)
    const currentYear = new Date().getFullYear();
    const countDownDate = new Date(`February 14, ${currentYear} 00:00:00`).getTime();

    // Update the countdown every 1 second
    const countdownElement = document.getElementById("countdown");
    const giftContainer = document.getElementById("giftContainer");

    const countdownInterval = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the remaining time
      const distance = countDownDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown
      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // If the countdown is over, display the gift container and stop the interval
      if (distance <= 0) {
        clearInterval(countdownInterval);
        countdownElement.style.display = "none";
        giftContainer.style.display = "block";
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="App">
      <h1>Valentine's Day Countdown</h1>
      <div id="countdown"></div>
      <div id="giftContainer">
      <h2>Your Valentine's Day Gift</h2>
        <p>Dear My Angel,</p>
        <p>Happy Valentine's Day!</p>
        <p>As we celebrate this special day, I find myself reflecting on the incredible journey we've shared over the past year. It's hard to believe how quickly time has flown by, and yet, every moment feels like a cherished memory etched in my heart.</p>
        <p>Our journey together has been filled with laughter, joy, and countless beautiful moments. From the simple, everyday occurrences to the extraordinary adventures we've embarked upon, each experience has only strengthened the bond we share.</p>
        <p>Thank you for being my rock, my confidant, and my greatest supporter. Your love has brought warmth and light into my life, making every day brighter and more meaningful. Together, we've faced challenges and celebrated triumphs, and through it all, our love has only grown stronger.</p>
        <p>On this special day, I want you to know how much you mean to me. You are not just my partner but my best friend, and I am grateful for the love, understanding, and companionship you bring into my life.</p>
        <p>Here's to many more years of shared laughter, love, and unforgettable moments. I look forward to continuing this beautiful journey with you, hand in hand, and creating countless more memories together.</p>
        <p>Happy Valentine's Day, my love. I cherish you today and every day.</p>
        <p>With all my love,</p>
        <p>Jarred</p>
      </div>
    </div>
  );
}

export default App;
