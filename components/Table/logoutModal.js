import { Modal } from 'antd'

const LogoutModal = ({ LogoutModalOpen, LogouthandleCancel }) => {
    return (
        <Modal open={LogoutModalOpen} onCancel={LogouthandleCancel} footer={null}>
            <div className="logout-modal-header">
                <h2 className="">Logout</h2>
            </div>
            <div className="logout-modal-box">
                <p className="logout-modal-text">
                    Are you sure you want to logout?
                </p>
                <div className="logout-modal-button-box">
                    <button className="logout-modal-button-cancel" onClick={LogouthandleCancel}>
                        Cancel
                    </button>
                    <button className="logout-modal-button-logout">
                        Logout
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default LogoutModal