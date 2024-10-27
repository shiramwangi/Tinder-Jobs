import { Observable } from '@nativescript/core';
import { jobs } from '../../shared/data/mock-data';
import { navigate } from '../../shared/navigation';

export function createViewModel() {
    const viewModel = new Observable();

    viewModel.jobIndex = 0;
    viewModel.currentJob = jobs[0];

    viewModel.onLike = () => {
        console.log('Liked:', viewModel.currentJob.title);
        viewModel.showNextJob();
    };

    viewModel.onSkip = () => {
        console.log('Skipped:', viewModel.currentJob.title);
        viewModel.showNextJob();
    };

    viewModel.showNextJob = () => {
        viewModel.jobIndex = (viewModel.jobIndex + 1) % jobs.length;
        viewModel.set('currentJob', jobs[viewModel.jobIndex]);
    };

    viewModel.navigateToProfile = () => {
        navigate('views/profile/profile-page');
    };

    viewModel.navigateToCompanies = () => {
        navigate('views/companies/companies-page');
    };

    return viewModel;
}