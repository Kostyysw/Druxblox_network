// app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Твои настройки Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA6UE15NYEYUw0hsL9LY2W7QGi2OY0vgWo",
  authDomain: "druxblox-8d353.firebaseapp.com",
  projectId: "druxblox-8d353",
  storageBucket: "druxblox-8d353.appspot.com",
  appId: "Druxblox"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Обработка регистрации
document.getElementById("register").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Пользователь зарегистрирован: " + userCredential.user.email);
    })
    .catch((error) => {
      alert("Ошибка: " + error.message);
    });
});

ddddididi


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

