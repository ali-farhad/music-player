import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Flashback",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      artist: "Blue Wednesday, Shopan",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11225",
      color: ["#b5a7da", "#2d3771"],
      id: uuidv4(),
      active: true,
    },

    {
      name: "Home Court",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      artist: "Blue Wednesday, Shopan",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11233",
      color: ["#b5a7da", "#2d3771"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Golden",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",
      artist: "Philanthrope, The Field Tapes",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13005",
      color: ["#754f35", "#672d1f"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
