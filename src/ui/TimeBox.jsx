function TimeBox({ label, value }) {
  return (
    <div className="bg-blue-500 text-white px-2 py-1 rounded mt-2">
      <p className="text-2xl font-bold">{value}</p>
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default TimeBox;
