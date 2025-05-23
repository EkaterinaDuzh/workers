import List from "./List.js";

const url = "https://workers-server.onrender.com/films/new";

const container = document.querySelector(".page");

const list = new List(url, container);

list.init();