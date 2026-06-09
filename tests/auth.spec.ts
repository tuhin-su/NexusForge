import { test, expect } from "@playwright/test";

test("login page loads", async ({
    page,
}) => {
    await page.goto("/auth/login");

    await expect(
        page.getByRole("button", {
            name: /sign in/i,
        })
    ).toBeVisible();
});

test("register page loads", async ({
    page,
}) => {
    await page.goto("/auth/register");

    await expect(
        page.getByRole("button", {
            name: /create account/i,
        })
    ).toBeVisible();
});