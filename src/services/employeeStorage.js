import initialEmployees from '../data/employees';
const KEY = 'employeehub_employees';
export function getEmployees() { try { const raw = localStorage.getItem(KEY); if (raw) { const parsed = JSON.parse(raw); if (Array.isArray(parsed)) return parsed; } } catch {} return initialEmployees; }
export function saveEmployees(employees) { localStorage.setItem(KEY, JSON.stringify(employees)); }
export function clearEmployees() { localStorage.removeItem(KEY); }
