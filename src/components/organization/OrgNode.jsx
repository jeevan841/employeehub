import { useNavigate } from 'react-router-dom';
import Avatar from '../common/Avatar';

export default function OrgNode({ employee, employees, childrenMap, expandedIds, onToggle, searchQuery, matchingIds }) {
  const navigate = useNavigate();
  const children = childrenMap[employee.id] || [];
  const isExpanded = expandedIds.has(employee.id);
  const isMatching = matchingIds.has(employee.id);
  const childrenSorted = children.sort((a, b) => `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`));
  return (
    <div className="org-node" style={{opacity: searchQuery && !isMatching && !Array.from(matchingIds).some(id => employees.find(e => e.id === id && e.managerId === employee.id)) ? 0.5 : 1}}>
      <div className="org-node-header" onClick={() => navigate(`/employees/${employee.id}`)}>
        <button className="org-node-toggle" disabled={children.length === 0} onClick={e => {e.stopPropagation(); onToggle(employee.id);}}>{children.length > 0 && (isExpanded ? '▼' : '▶')}</button>
        <Avatar firstName={employee.firstName} lastName={employee.lastName} profileImage={employee.profileImage} size="small" />
        <div className="org-node-card">
          <div><div className="org-node-name">{employee.firstName} {employee.lastName}</div><div className="org-node-role">{employee.designation}</div><div className="org-node-department">{employee.department}</div></div>
        </div>
      </div>
      {isExpanded && childrenSorted.length > 0 && (
        <div className="org-node-children">
          {childrenSorted.map(child => <OrgNode key={child.id} employee={child} employees={employees} childrenMap={childrenMap} expandedIds={expandedIds} onToggle={onToggle} searchQuery={searchQuery} matchingIds={matchingIds} />)}
        </div>
      )}
    </div>
  );
}
