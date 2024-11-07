import { test } from '@playwright/test';
import RegisterPage from '../support/pages/RegisterPage';

test.describe('Cadastro de usuário no PHP Travels', () => {
  let registerPage: RegisterPage;
  let BASE_URL = 'https://phptravels.com/demo/';

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await page.goto(BASE_URL);
  });

  test('Preencher formulário de cadastro com dados válidos', async () => {
    await registerPage.preencherFormulario();
  });

  test('Preencher formulário de cadastro com email inválidos', async () => {
    await registerPage.preencherFormularioComEmailInvalido();
  });

  test('Preencher formulário de cadastro com telefone inválido', async () => {
    await registerPage.preencherFormularioComTelefoneInvalido();
  });
});
