function Error() {
  return (
    <p className="error bg-dark p-4 sm:p-6 rounded-xl shadow-lg text-center text-medium text-sm sm:text-base">
      <span>💥</span> There was an error fetching questions.
    </p>
  );
}

export default Error;
