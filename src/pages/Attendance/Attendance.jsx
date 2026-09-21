import { useMemo } from 'react';
import { useEmployees } from '../../context/EmployeeContext';
import { attendanceRecords } from '../../data/attendance';
import Card from '../../components/common/Card';

export default function Attendance() {
  const { employees } = useEmployees();
  const employeeMap = new Map(employees.map((employee) => [employee.id, employee]));

  const summary = useMemo(() => ({
    present: attendanceRecords.filter((record) => record.status === 'Present').length,
    late: attendanceRecords.filter((record) => record.status === 'Late').length,
    leave: attendanceRecords.filter((record) => record.status === 'On Leave').length,
    remote: attendanceRecords.filter((record) => record.location === 'Remote' || record.location === 'Hybrid').length,
  }), []);

  return (
    <div>
      <div className="page-title">
        <div>
          <p className="eyebrow">Attendance</p>
          <h2>Time & attendance</h2>
          <p className="muted">Track presence and team attendance across the organization.</p>
        </div>
      </div>

      <div className="stats-grid">
        {[
          ['Present today', summary.present],
          ['Late arrivals', summary.late],
          ['On leave', summary.leave],
          ['Remote / hybrid', summary.remote],
        ].map(([label, value]) => (
          <Card key={label}>
            <p className="stat-label">{label}</p>
            <strong className="stat-value">{value}</strong>
          </Card>
        ))}
      </div>

      <div className="dashboard-grid">
        <Card title="Today's attendance">
          <div className="table-card">
            <table>
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map((record) => {
                  const employee = employeeMap.get(record.employeeId);
                  if (!employee) return null;

                  const statusClass =
                    record.status === 'Present'
                      ? 'badge-success'
                      : record.status === 'Late'
                        ? 'badge-warning'
                        : 'badge-neutral';

                  return (
                    <tr key={record.id}>
                      <td>
                        {employee.firstName} {employee.lastName}
                      </td>
                      <td>{employee.department}</td>
                      <td>{record.checkIn}</td>
                      <td>{record.checkOut}</td>
                      <td>
                        <span className={`badge ${statusClass}`}>
                          <i />
                          {record.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Quick actions">
          <div className="quick-actions">
            <button type="button" className="button primary">Mark attendance</button>
            <button type="button" className="button secondary">View timesheets</button>
            <button type="button" className="button secondary" disabled>Export report</button>
          </div>
        </Card>
      </div>
    </div>
  );
}
