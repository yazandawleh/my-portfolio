import react from 'react'; 
import './skills.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function SkillsBars({percentage,label}) {

 return (
    <>
        <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
                rotation: 0,
                strokeLinecap: 'round',
                textSize: '25px',
                pathColor: `linear-gradient(rgb(1, 1, 88),#088395)`,
                textColor: '#fff',
                trailColor: 'transparent',
                backgroundColor: '#3e98c7',
            })}
            />
        </div>
        <h5 className='skill-label'>{label}</h5>
    </>

  );
}

export default react.memo(SkillsBars);