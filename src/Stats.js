export default function Stats({ items }) {
  const numItems = items.length;

  if (!numItems)
    return (
      <footer className="stats">
        <p>Start adding some items to your packing list 🧭</p>
      </footer>
    );

  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.floor((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? 'You got everything! Ready to go ✈'
          : `You have ${numItems} ${
              numItems === 1 ? 'item' : 'items'
            } on your list and
          you already packed ${numPacked} ${
              numPacked === 1 ? 'item' : 'items'
            }. (
          ${percentPacked}%)`}
      </em>
    </footer>
  );
}
