<?php

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function eandu_form_system_theme_settings_alter(&$form, FormStateInterface $form_state): void {
  // Ensure the Olivero settings group exists to avoid "undefined index" errors.
  if (!isset($form['olivero_settings'])) {
    $form['olivero_settings']['olivero_utilities'] = [
      '#type' => 'details',
      '#title' => t('Olivero Utilities'),
      '#open' => TRUE,
    ];
  }

  $form['olivero_settings']['olivero_utilities']['mobile_menu_all_widths'] = [
    '#type' => 'checkbox',
    '#title' => t('Enable mobile menu at all widths'),
    // Ensure eandu.settings.yml exists in your config/install folder
    '#config_target' => 'eandu.settings:mobile_menu_all_widths',
    '#description' => t('Enables the mobile menu toggle at all widths.'),
    '#default_value' => theme_get_setting('mobile_menu_all_widths'),
  ];
}