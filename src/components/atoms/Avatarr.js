import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Avatarr({
    getRolesFromAvatarToDisplayAboveForm,
}) {

    const style = {
        width: '70px',
        height: '70px'
    }

    const roles = {
        admin: "Admin",
        mentor: 'Mentor',
        employee: 'Employee'
    }

    return (
        <Stack direction="row" spacing={2}>
            <Avatar alt="Admin" src="/static/images/avatar/1.jpg" sx={style} onClick={() => getRolesFromAvatarToDisplayAboveForm(roles.admin)} />
            <Avatar alt="Mentor" src="/static/images/avatar/2.jpg" sx={style} onClick={() => getRolesFromAvatarToDisplayAboveForm(roles.mentor)} />
            <Avatar alt="Employee" src="/static/images/avatar/3.jpg" sx={style} onClick={() => getRolesFromAvatarToDisplayAboveForm(roles.employee)} />
        </Stack>
    );
}
