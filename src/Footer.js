function Footer({ items }) {
  let itemCount = items.length;
  let itemCheckedCount = items.filter((item) => item.completed).length;
  let percentage =
    itemCount > 0 ? Math.round((itemCheckedCount / itemCount) * 100) : 0;

  return (
    <div>
      <p>
        You have {itemCount} items in your list, and you have completed{" "}
        {itemCheckedCount}, {percentage}%
      </p>
    </div>
  );
}

export default Footer;
