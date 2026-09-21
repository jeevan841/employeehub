import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEmployees } from '../../context/EmployeeContext';
import Avatar from '../../components/common/Avatar';
import Badge from '../../components/common/Badge';
import Card from '../../components/common/Card';
import EmptyState from '../../components/common/EmptyState';

function ProfileOverview({ employee, manager }) {
  const joining = new Date(employee.joiningDate);
  const today = new Date();
  const years = ((today - joining) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
  return (
    <div className="profile-content">
      <Card title="Personal Information">
        <div className="profile-section">
          {[['First Name', employee.firstName], ['Last Name', employee.lastName], ['Email', employee.email], ['Phone', employee.phone], ['Location', employee.location]].map(([label, value]) => (
            <div className="profile-section-item" key={label}><span className="profile-section-label">{label}</span><span className="profile-section-value">{value}</span></div>
          ))}
        </div>
      </Card>
      <Card title="Employment Information">
        <div className="profile-section">
          {[['Employee ID', employee.id], ['Department', employee.department], ['Designation', employee.designation], ['Employment Type', employee.employmentType], ['Status', <Badge key="status" status={employee.status} />], ['Joining Date', new Date(employee.joiningDate).toLocaleDateString()], ['Tenure', `${years} years`]].map(([label, value]) => (
            <div className="profile-section-item" key={label}><span className="profile-section-label">{label}</span><span className="profile-section-value">{value}</span></div>
          ))}
        </div>
      </Card>
      <Card title="Organization Information">
        <div className="profile-section">
          {manager ? (
            <Link className="manager-card" to={`/employees/${manager.id}`}>
              <Avatar firstName={manager.firstName} lastName={manager.lastName} profileImage={manager.profileImage} size="medium" />
              <div className="manager-info">
                <p className="profile-section-label">Reports To</p>
                <h4>{manager.firstName} {manager.lastName}</h4>
                <p>{manager.designation}</p>
              </div>
            </Link>
          ) : (
            <div className="profile-section-item"><span className="profile-section-label">Manager</span><span className="profile-section-value">Top Level / No Manager</span></div>
          )}
        </div>
      </Card>
    </div>
  );
}

function ProfileSkills({ employee }) {
  return (
    <div className="profile-content" style={{gridColumn: '1 / -1'}}>
      <Card title="Skills & Expertise">
        <div className="skills-container">
          {employee.skills.length > 0 ? employee.skills.map((skill, idx) => {
            const levels = ['Advanced', 'Intermediate', 'Beginner'];
            const level = levels[Math.min(idx, 2)];
            return <div className="skill-badge" key={skill}>{skill}<span className="skill-level">{level}</span></div>;
          }) : <p className="muted">No skills added yet.</p>}
        </div>
      </Card>
    </div>
  );
}

export default function EmployeeProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { employees, getEmployeeById } = useEmployees();
  const [tab, setTab] = useState('overview');
  const employee = getEmployeeById(id);
  if (!employee) return <EmptyState title="Employee not found" message="This employee record does not exist." actionLabel="Back to directory" actionTo="/employees" />;
  const manager = employee.managerId ? getEmployeeById(employee.managerId) : null;
  return (
    <div>
      <div className="profile-header">
        <div className="profile-hero">
          <Avatar firstName={employee.firstName} lastName={employee.lastName} profileImage={employee.profileImage} size="large" />
          <div className="profile-info">
            <h1>{employee.firstName} {employee.lastName}</h1>
            <p style={{margin: '0.5rem 0', color: '#666', fontSize: '1rem'}}>{employee.designation}</p>
            <p style={{margin: '0.25rem 0', color: '#999', fontSize: '0.9rem'}}>{employee.department} • {employee.location}</p>
            <Badge status={employee.status} />
            <div className="profile-meta">
              {[['ID', employee.id], ['Type', employee.employmentType], ['Email', employee.email], ['Phone', employee.phone]].map(([label, value]) => (
                <div className="profile-meta-item" key={label}><div className="profile-meta-label">{label}</div><div className="profile-meta-value">{value}</div></div>
              ))}
            </div>
            <div className="profile-actions">
              <button className="button secondary" onClick={() => navigate('/employees')}>Back to employees</button>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-tabs">
        {[['overview', 'Overview'], ['skills', 'Skills'], ['goals', 'Goals'], ['activity', 'Activity']].map(([key, label]) => (
          <button key={key} className={`profile-tab ${tab === key ? 'active' : ''}`} onClick={() => setTab(key)}>{label}</button>
        ))}
      </div>
      {tab === 'overview' && <ProfileOverview employee={employee} manager={manager} />}
      {tab === 'skills' && <ProfileSkills employee={employee} />}
      {tab === 'goals' && <div className="profile-content" style={{gridColumn: '1 / -1'}}><div className="coming-soon"><div className="coming-icon">🎯</div><h2>Goals coming soon</h2><p>Track employee goals and performance in the next phase.</p></div></div>}
      {tab === 'activity' && <div className="profile-content" style={{gridColumn: '1 / -1'}}><div className="coming-soon"><div className="coming-icon">📋</div><h2>Activity log coming soon</h2><p>Employee activity history will be available in the next phase.</p></div></div>}
    </div>
  );
}
