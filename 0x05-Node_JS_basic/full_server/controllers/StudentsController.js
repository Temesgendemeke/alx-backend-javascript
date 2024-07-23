// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

export class StudentsController {
  static async getAllStudents (req, res) {
    try {
      const students = await readDatabase(process.argv[3]);
      let response = 'This is the list of our students\n';
      Object.keys(students).sort().forEach((field) => {
        response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });
      return res.status(200).send(response.trim());
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor (req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(process.argv[3]);
      const response = `List: ${students[major].join(', ')}`;
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}
