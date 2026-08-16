import React, { useState, useEffect } from 'react';
import { ref, onValue, remove } from "firebase/database";
import { database } from "../../../configuration/firebase";
import styles from "./UserData.module.css";
import {
    TbUsers, TbTrash, TbSearch, TbUserX,
    TbMail, TbPhone, TbCalendar, TbGenderBigender
} from "react-icons/tb";

const UserData = () => {
    const [users, setUsers]   = useState([]);
    const [loader, setLoader] = useState(true);
    const [search, setSearch] = useState("");
    const [deletingId, setDeletingId] = useState(null);

    useEffect(() => {
        const userRef = ref(database, "users");

        /* ─────────────────────────────────────────────────────────
           onValue — live listener. snapshot.val() returns a raw
           object keyed by Firebase push IDs. Object.entries() turns
           it into [ [id, data], … ] pairs so we can attach the key
           as an `id` field on each user object.
           Returning unsubscribe() cleans up the listener on unmount.
        ───────────────────────────────────────────────────────── */
        const unsubscribe = onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const usersArray = Object.entries(data).map(([id, user]) => ({
                    id,
                    ...user,
                }));
                setUsers(usersArray);
            } else {
                setUsers([]);
            }
            setLoader(false);
        });

        return () => unsubscribe();
    }, []);

    const handleDelete = async (id) => {
        setDeletingId(id);
        try {
            await remove(ref(database, `users/${id}`));
        } catch (error) {
            console.error("Delete error:", error);
            // Optimistic UI fallback — filter locally if Firebase fails
            setUsers((prev) => prev.filter((u) => u.id !== id));
        } finally {
            setDeletingId(null);
        }
    };

    /* Client-side search across name, email, phone */
    const filtered = users.filter((u) => {
        const q = search.toLowerCase();
        return (
            (u.username || "").toLowerCase().includes(q) ||
            (u.email    || "").toLowerCase().includes(q) ||
            (u.tel      || "").toLowerCase().includes(q)
        );
    });

    const genderClass = { male: styles.male, female: styles.female, other: styles.other };

    return (
        <div className={styles.card}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <div className={styles.iconBadge}>
                        <TbUsers size={20} />
                    </div>
                    <div>
                        <h3 className={styles.title}>Registered Users</h3>
                        <p className={styles.subtitle}>Manage your user database</p>
                    </div>
                </div>
                <span className={styles.badge}>{users.length} {users.length === 1 ? "User" : "Users"}</span>
            </div>

            {/* Search bar */}
            {!loader && users.length > 0 && (
                <div className={styles.searchWrap}>
                    <TbSearch size={16} className={styles.searchIcon} />
                    <input
                        className={styles.searchInput}
                        type="text"
                        placeholder="Search by name, email or phone…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            )}

            {/* States */}
            {loader ? (
                <div className={styles.center}>
                    <div className={styles.loader} />
                    <p className={styles.loadingText}>Loading users…</p>
                </div>
            ) : filtered.length === 0 ? (
                <div className={styles.empty}>
                    <TbUserX size={40} className={styles.emptyIcon} />
                    <p>{search ? "No users match your search." : "No registered users yet."}</p>
                </div>
            ) : (
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th><TbUsers size={14} style={{marginRight:5,verticalAlign:'middle'}}/>Name</th>
                                <th><TbMail size={14} style={{marginRight:5,verticalAlign:'middle'}}/>Email</th>
                                <th><TbPhone size={14} style={{marginRight:5,verticalAlign:'middle'}}/>Phone</th>
                                <th><TbCalendar size={14} style={{marginRight:5,verticalAlign:'middle'}}/>Age</th>
                                <th><TbGenderBigender size={14} style={{marginRight:5,verticalAlign:'middle'}}/>Gender</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((item, idx) => (
                                <tr key={item.id} className={styles.row}>
                                    <td className={styles.rowNum}>{idx + 1}</td>
                                    <td>
                                        <div className={styles.nameCell}>
                                            <div className={styles.avatar}>
                                                {(item.username || "?")[0].toUpperCase()}
                                            </div>
                                            <span className={styles.userName}>{item.username || "—"}</span>
                                        </div>
                                    </td>
                                    <td className={styles.muted}>{item.email || "—"}</td>
                                    <td className={styles.muted}>{item.tel || "N/A"}</td>
                                    <td className={styles.muted}>{item.age || "—"}</td>
                                    <td>
                                        <span className={`${styles.genderBadge} ${genderClass[item.gender] || styles.other}`}>
                                            {item.gender || "N/A"}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className={styles.deleteBtn}
                                            onClick={() => handleDelete(item.id)}
                                            disabled={deletingId === item.id}
                                            title="Delete user"
                                            aria-label={`Delete ${item.username}`}
                                        >
                                            {deletingId === item.id
                                                ? <span className={styles.miniSpinner} />
                                                : <TbTrash size={16} />
                                            }
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default UserData;
