resource "checkly_check" "rulz-ai" {
  name                      = "rulz-ai"
  type                      = "BROWSER"
  frequency                 = 1440
  activated                 = true
  muted                     = false
  should_fail               = false
  locations                 = ["ap-southeast-1", "ap-northeast-2", "eu-west-2", "eu-west-3", "us-east-1", "us-west-1"]
  script                    = file("${path.module}/rulz-ai.spec.ts")
  degraded_response_time    = 15000
  max_response_time         = 30000
  tags                      = []
  ssl_check_domain          = "rulz-ai.com"
  runtime_id                = "2023.09"
  alert_settings {
    escalation_type = "RUN_BASED"
    run_based_escalation {
      failed_run_threshold = 1
    }
    time_based_escalation {
      minutes_failing_threshold = 5
    }
    reminders {
      amount   = 0
      interval = 5
    }
  }
  retry_strategy {
    type                 = "FIXED"
    base_backoff_seconds = 0
    max_retries          = 1
    max_duration_seconds = 600
    same_region          = false
  }
  use_global_alert_settings = true
  # group_id                = ""
  # group_order             = ""
}
