function speak(){
  const text = document.getElementById(`input`).value;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}