import { useState, useMemo } from 'react';
import { useEmployees } from '../../context/EmployeeContext';
import Card from '../../components/common/Card';
import OrgTree from '../../components/organization/OrgTree';

export default function Organization() {
  const { employees } = useEmployees();
  const [search, setSearch] = useState('');
  const topLevelEmployees = useMemo(() => employees.filter(e => !e.managerId), [employees]);
  const managers = useMemo(() => new Set(employees.filter(e => employees.some(emp => emp.managerId === e.id)).map(e => e.id)).size, [employees]);
  const departments = useMemo(() => new Set(employees.map(e => e.department)).size, [employees]);
  return (
    <div>
      <div className="page-title">
        <div><p className="eyebrow">Organization</p><h2>Organization Structure</h2><p className="muted">View the company hierarchy and team relationships.</p></div>
      </div>
      <div className="org-stats">
        {[['Total Employees', employees.length], ['Managers', managers], ['Departments', departments], ['Top Level', topLevelEmployees.length]].map(([label, value]) => (
          <Card key={label}><p className="stat-label">{label}</p><strong className="stat-value">{value}</strong></Card>
        ))}
      </div>
      <Card title="Company Hierarchy">
        <input className="search-input" placeholder="Search by name, ID, designation, or department..." value={search} onChange={e => setSearch(e.target.value)} style={{marginBottom: '1rem'}} />
        <div className="org-tree">
          <OrgTree employees={employees} topLevelEmployees={topLevelEmployees} searchQuery={search} />
        </div>
      </Card>
      <div style={{marginTop: '2rem'}}>
        <Card title="Department Overview">
          <div className="org-departments">
            {[...new Set(employees.map(e => e.department))].sort().map(dept => {
              const deptEmployees = employees.filter(e => e.department === dept);
              const deptManagers = deptEmployees.filter(e => employees.some(emp => emp.managerId === e.id));
              return (
                <div className="dept-card" key={dept}>
                  <h4>{dept}</h4>
                  <div className="dept-stat"><span className="dept-stat-label">Employees</span><span className="dept-stat-value">{deptEmployees.length}</span></div>
                  <div className="dept-stat"><span className="dept-stat-label">Managers</span><span className="dept-stat-value">{deptManagers.length}</span></div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
