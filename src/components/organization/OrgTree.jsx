import { useMemo, useState } from 'react';
import OrgNode from './OrgNode';

export default function OrgTree({ employees, topLevelEmployees, searchQuery = '' }) {
  const [expandedIds, setExpandedIds] = useState(new Set());
  const childrenMap = useMemo(() => {
    const map = {};
    employees.forEach(e => {
      if (e.managerId) {
        if (!map[e.managerId]) map[e.managerId] = [];
        map[e.managerId].push(e);
      }
    });
    return map;
  }, [employees]);
  const matchingIds = useMemo(() => {
    if (!searchQuery) return new Set();
    const matches = new Set();
    const query = searchQuery.toLowerCase();
    employees.forEach(e => {
      if (`${e.firstName} ${e.lastName}`.toLowerCase().includes(query) || e.id.toLowerCase().includes(query) || e.designation.toLowerCase().includes(query) || e.department.toLowerCase().includes(query)) matches.add(e.id);
    });
    return matches;
  }, [searchQuery, employees]);
  const parentChain = useMemo(() => {
    if (matchingIds.size === 0) return new Set();
    const chain = new Set();
    const findParents = (empId) => {
      const emp = employees.find(e => e.id === empId);
      if (emp && emp.managerId) {
        chain.add(emp.managerId);
        findParents(emp.managerId);
      }
    };
    matchingIds.forEach(id => findParents(id));
    return chain;
  }, [matchingIds, employees]);
  const autoExpandIds = new Set([...expandedIds, ...parentChain, ...matchingIds]);
  return (
    <div className="org-tree">
      {topLevelEmployees.sort((a, b) => `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`)).map(emp => (
        <OrgNode key={emp.id} employee={emp} employees={employees} childrenMap={childrenMap} expandedIds={autoExpandIds} onToggle={id => setExpandedIds(prev => {const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next;})} searchQuery={searchQuery} matchingIds={matchingIds} />
      ))}
    </div>
  );
}
