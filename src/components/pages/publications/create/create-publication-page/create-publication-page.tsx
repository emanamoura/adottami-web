import { FC, useState } from 'react';

import Page from '@/components/common/page/page';
import FormPageHeader from '@/components/pages/components/form-page-header/form-pageheader';
import PublicationForm from '@/components/pages/components/publication-form/publication-form';
import { PublicationFields } from '@/models/publication/types';

import FormFooter from './components/form-footer';
import { PAGE_TITLE } from './constants';

const CreatePublicationPage: FC = () => {
  const [publication, setPublication] = useState<PublicationFields>({} as PublicationFields);

  return (
    <Page title={PAGE_TITLE}>
      <FormPageHeader />

      <PublicationForm formData={publication} header="Qual pet você está anunciando?" />

      <FormFooter onSubmit={() => {}} />
    </Page>
  );
};

export default CreatePublicationPage;
