function renderStars(rate) {
  const rating = Number(rate) || 0;
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<img key={`full-${i}`} src="/star-full.png" alt="star" className="w-4 h-4" />);
  }
  if (hasHalfStar) {
    stars.push(<img key={`half`} src="/star-half.png" alt="half star" className="w-4 h-4" />);
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<img key={`empty-${i}`} src="/star-empty.png" alt="empty star" className="w-4 h-4" />);
  }

  return stars;
};

export default renderStars;