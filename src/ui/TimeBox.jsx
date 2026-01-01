function TimeBox({ label, value }) {
  return (
    <div className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
      <p className="text-2xl font-bold">{value}</p>
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default TimeBox;
