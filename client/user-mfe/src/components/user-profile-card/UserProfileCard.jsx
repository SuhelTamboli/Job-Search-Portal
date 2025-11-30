import React, { useState } from "react";
import styles from "./UserProfileCard.module.css";
import { MdEdit } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import Button from "shared-ui/Button";

const UserProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fName: "abc",
    lName: "abc",
    email: "abc@gmail.com",
    password: "1122",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateUserProfile = () => {};

  return (
    <div className={styles.userProfileCardContainer}>
      <div>
        <h3>Profile</h3>
        {isEditing ? (
          <MdCancel
            size={20}
            className={styles.userProfileCardEditIcon}
            onClick={() => setIsEditing((prev) => !prev)}
          />
        ) : (
          <MdEdit
            size={20}
            className={styles.userProfileCardEditIcon}
            onClick={() => setIsEditing((prev) => !prev)}
          />
        )}
      </div>
      <div className={styles.userProfileCardFieldsWrapper}>
        {/*First Name */}
        <label className={styles.userProfileCardFieldLable} htmlFor="fName">
          First Name:{" "}
        </label>
        {isEditing ? (
          <input
            type="text"
            id="fName"
            name="fName"
            value={formData.fName}
            onChange={handleFormChange}
            className={styles.userProfileCardFieldInput}
          />
        ) : (
          <span>{formData.fName}</span>
        )}

        {/*Last Name */}
        <label className={styles.userProfileCardFieldLable} htmlFor="lName">
          Last Name:{" "}
        </label>
        {isEditing ? (
          <input
            type="text"
            id="lName"
            name="lName"
            value={formData.lName}
            onChange={handleFormChange}
            className={styles.userProfileCardFieldInput}
          />
        ) : (
          <span>{formData.lName}</span>
        )}

        {/*Email */}
        <label className={styles.userProfileCardFieldLable} htmlFor="email">
          Email:{" "}
        </label>
        {isEditing ? (
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            className={styles.userProfileCardFieldInput}
          />
        ) : (
          <span>{formData.email}</span>
        )}
      </div>
      {isEditing && <div className={styles.userProfileCardSaveButtonWrapper}>
        <Button name={"Save"} handleClick={updateUserProfile} />
      </div>}
    </div>
  );
};

export default UserProfileCard;
