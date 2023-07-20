import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface DogJoke {
  dogImageUrl: string;
  jokeText: string;
  jokePunchline: string;
}

@Component({
  selector: 'app-dog-joke',
  templateUrl: './dog-joke.component.html',
  styleUrls: ['./dog-joke.component.css']
})

export class DogJokeComponent implements OnInit {
  dogImageUrl: string = '';
  jokeText: string = '';
  jokePunchline: string = '';
  countdown: number = 20;
  countdownInterval: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchDogImage();
    this.fetchJoke();
    this.startCountdown();

    const countdownButton = document.getElementById('countdown-btn');
    if (countdownButton) {
      countdownButton.addEventListener('click', () => {
        clearInterval(this.countdownInterval); // Detener la cuenta regresiva actual
        this.performAction(); // Reiniciar las peticiones y la cuenta regresiva
      });
    }
  }

  fetchDogImage() {
    this.http.get<{ message: string, status: string }>('https://dog.ceo/api/breeds/image/random').subscribe((data) => {
      this.dogImageUrl = data.message;
    });
  }

  fetchJoke() {
    this.http.get<{ setup: string, punchline: string, id: number }>('https://official-joke-api.appspot.com/random_joke').subscribe((data) => {
      this.jokeText = data.setup;
      this.jokePunchline = data.punchline;
    });
  }

  performAction() {
    this.fetchDogImage();
    this.fetchJoke();
    this.startCountdown(); // Inicia la cuenta regresiva nuevamente
  }

  startCountdown() {
    this.countdown = 20;
    this.updateButtonText();

    this.countdownInterval = setInterval(() => {
      this.countdown--;
      this.updateButtonText();

      if (this.countdown <= 0) {
        clearInterval(this.countdownInterval);
        this.performAction();
      }
    }, 1000);
  }

  updateButtonText() {
    const countdownButton = document.getElementById('countdown-btn');
    if (countdownButton) {
      countdownButton.innerText = this.countdown.toString() + ' seconds';
    }
  }
}

