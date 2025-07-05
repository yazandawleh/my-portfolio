import React from 'react';
import './BetweenFloating.css';

function BetweenFloating() {
  return (
    <div className="floating-wrapper">
      <div className="floating-box">
        <h3>See My Projects At Once</h3>
        <p>Leave Here Your E-mail Address</p>
        <form>
          <input type="email" placeholder="Your Email" required />
          <button type="submit" class="btn btn-outline-info btn-lg">Send</button>
        </form>
      </div>
    </div>
  );
}

export default React.memo(BetweenFloating);

