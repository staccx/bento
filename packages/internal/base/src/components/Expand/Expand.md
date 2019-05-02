<div>
  <p style={{ marginBottom: "24px" }}>
    This is a component that gets out of your way. The first child will be used
    to expand the other children. Component gives minimal styling to anything –
    it’s up to you.
  </p>
  <Expand>
    <span>Expand me</span>
    <div>
      <ul>
        <li>We are all hidden</li>
        <li>Children of expand</li>
      </ul>
      <button onClick={() => console.log("Yo")}>Ikke klikk på meg</button>
    </div>
  </Expand>
</div>
