function showFeed(type) {
      var feedArea = document.getElementById('feedArea');
      
      if(type === 'seeking') {
        feedArea.innerHTML = `
          <div class="post-card">
            <span class="tag rant">Active Vent</span>
            <h3>Struggling with work-life balance this week</h3>
            <p>Between long shifts and getting ready for the upcoming school semester, I feel completely overwhelmed. Just needed a quiet place to drop this text.</p>
            <a href="hugs.html" class="btn" style="text-decoration: none; display: inline-block;">Send a Virtual Hug</a>
          </div>
        `;
      } else if(type === 'providing') {
        feedArea.innerHTML = `
          <div class="post-card">
            <span class="tag rave">Support Sentinel Available</span>
            <h3>Here to listen!</h3>
            <p>I have a cup of warm tea ready, and I am standing by to read any rants or view any worries you want to drop. You are completely safe here, friend.</p>
            <a href="connect.html" class="btn" style="text-decoration: none; display: inline-block;">Connect Privately</a>
          </div>
        `;
      }
    }