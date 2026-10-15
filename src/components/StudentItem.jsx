const StudentItem = ({ student, onDelete }) => {
    const { id, name, score, class: studentClass } = student;

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{score}</td>
            <td>{studentClass}</td>
            <td>
                <span
                    className={
                        score >= 8
                            ? "badge good"
                            : score < 5
                                ? "badge failed"
                                : "badge average"
                    }
                >
                    {score >= 8
                        ? "Giỏi"
                        : score < 5
                            ? "Trượt"
                            : "Đạt"}
                </span>
            </td>
            <td>
                <button
                    className="delete-btn"
                    onClick={() => onDelete(id)}
                >
                    Xóa
                </button>
            </td>
        </tr>
    );
};

export default StudentItem;