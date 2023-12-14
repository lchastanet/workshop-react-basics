import Avatar from "./components/Avatar"

const characters = [
  {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson",
  },
  {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
    firstName: "Homer",
    lastName: "Simpson",
  },
]

function App() {
  return (
    <div>
      {/* <Avatar
        image={bart.image}
        firstName={bart.firstName}
        lastName={bart.lastName}
      />
      <Avatar {...homer} /> */}
      {characters.map((character) => (
        <Avatar
          key={character.firstName}
          image={character.image}
          firstName={character.firstName}
          lastName={character.lastName}
        />
      ))}
    </div>
  )
}

export default App
