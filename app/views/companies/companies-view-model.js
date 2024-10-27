import { Observable } from '@nativescript/core';
import { companies } from '../../shared/data/mock-data';
import { navigate } from '../../shared/navigation';

export function createViewModel() {
    const viewModel = new Observable();
    
    viewModel.companies = companies;

    viewModel.onCompanyTap = (args) => {
        const company = companies[args.index];
        navigate('views/companies/company-detail-page', { company });
    };

    return viewModel;
}