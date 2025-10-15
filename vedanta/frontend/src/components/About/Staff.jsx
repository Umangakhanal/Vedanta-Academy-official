import { useEffect,useState } from "react";
import Styles from './Staff.module.css';

const Staff =()=>{
    const [staffs, setStaffs]=useState([]);

    const rolePriority = {
        Head: 1,
        "Department Head":2,
        Supervisor: 3,
        Employee:4,
    };
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/api/staff`)
        .then((res)=> res.json())
        .then((data)=>{
            const sortedStaff= data.result.sort((a,b)=>{
                const roleA = rolePriority[a.role] || 99;
                const roleB = rolePriority[b.role] || 99;
                return roleA-roleB;
            });
            setStaffs(sortedStaff);
        })
        .catch((err)=> console.error("Error fetching staff:",err));
    },[]);
    if (!staffs.length) return null;
    return (
        <section className={Styles.staffSection}>
            <h2 className={Styles.heading}>Our Team</h2>
            <div className={Styles.grid}>
                {staffs.map((member)=>(
                    <div key={member._id} className={Styles.card}>
                        <div className={Styles.imageWrapper}>
                            <img src={member.photoUrl} alt={member.name} />
                        </div>
                        <h3 className={Styles.name}>{member.name}</h3>
                        <p className={Styles.role}>{member.role}</p>
                        <p className={Styles.department}>{member.department}</p>
                        <p className={Styles.bio}>{member.bio}</p>
                        
                    </div>
                ))}
            </div>
        </section>
    );
};  
export default Staff;