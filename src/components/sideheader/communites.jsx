import Style from './communities.module.css';

export default function Communities() {
  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <h2>Communities</h2>
      </div>

      {/* Image */}
      <div className={Style.image}>
        <img src="./communities.png" alt="Communities" />
      </div>

      <div className={Style.textContainer}>
        <h3>Stay connected with a community</h3>
        <p>
          Communities bring members together in topic-based groups and make it easy to get admin announcements. 
          Any community you're added to will appear here.
        </p>
        <span className={Style.pare}> See example Communities</span>
      </div>
      <button className={Style.startcomm}>Start your Community</button> 
    </div>
  );
}
