import { Datagrid, DateField, EmailField, List, ReferenceField, TextField, Show, SimpleShowLayout, SelectInput } from 'react-admin';

export const StudentList = () => (
    <List>
        <Datagrid>
            <TextField source="application_type" />
            <ReferenceField source="collectionId" reference="collections" />
            <TextField source="collectionName" />
            <TextField source="course" />
            <DateField source="created" />
            <EmailField source="email" />
            <TextField source="id" />
            <TextField source="modules" />
            <TextField source="name" />
            <TextField source="surname" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);

import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput, Create} from 'react-admin';

export const StudentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="application_type" />
            <TextInput source="course" />
            <DateInput source="created" />
            <TextInput source="email" />
            <TextInput source="id" />
            <SelectInput source="modules" 
            choices={[
                { id: 'modules', name: 'psychology' },
                { id: 'modules', name: 'sociology' },
                { id: 'people', name: 'binf' },
            ]}
            />

            
            <TextInput source="name" />
            <TextInput source="surname" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);

export const StudentCreate = () => (
    <Create>
        <SimpleForm>
        <SelectInput source="application_type" />
            <TextInput source="course" />
            <TextInput source="email" />
            <TextInput source="id" />
            <SelectInput source="modules" 
            choices={[
                { id: 'modules', name: 'psychology' },
                { id: 'modules', name: 'sociology' },
                { id: 'people', name: 'binf' },
            ]}/>
        </SimpleForm>
    </Create>
);

export const StudentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="application_type" />
            <ReferenceField source="collectionId" reference="collections" />
            <TextField source="collectionName" />
            <TextField source="course" />
            <DateField source="created" />
            <EmailField source="email" />
            <TextField source="id" />
            <TextField source="modules" />
            <TextField source="name" />
            <TextField source="surname" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);