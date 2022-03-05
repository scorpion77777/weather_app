class Fetch {
  async getCurrent(input) {
    const myKey = "e88cb3ff66f8d540caf49e9346984117c";

    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=${input}&id=524901&appid=e88cb3ff66f8d540caf49e9346984117&units=imperial"
    );

    const data = await response.json();
  }
}
