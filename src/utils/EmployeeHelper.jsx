import axios from "axios";

export const fetchDepartments = async () => {
    let departments = [];
    try {
        const response = await axios.get('http://localhost:8000/api/department', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        if (response.data.success) {
            departments = response.data.departments
        }
    } catch (error) {
        if (error.response) {
            alert(error.response.data.error || "Server error");
        } else {
            alert("Network error");
        }
    } 
    return departments;
};
