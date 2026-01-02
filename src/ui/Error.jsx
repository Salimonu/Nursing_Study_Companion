function Error({ value }) {
  return (
    <div className="text-3xl text-blue-800 font-semibold pt-24 ml-10">
      ❌ Error Loading {value}; Pls try again.
    </div>
  );
}

export default Error;
