"""
This tracks anonymized usage statistics of gluestick using Mixpanel.
If you'd like to disable this, please refer to the gluestick docs https://docs.gluestick.xyz
"""
import os

from mixpanel import Mixpanel
from shortid import ShortId

mp = Mixpanel('c1183ed0e00132d88ad169ddd3f3673b')
sid = ShortId()
anon_id = sid.generate()

def track(event_name, event_data = {}):
    """
    Sends event to Mixpanel using anon_id 
    """
    # Check if usage stat collection is enabled
    is_enabled = os.environ.get("GLUESTICK_USAGE_STATS", "ENABLE") == "ENABLE"
    if not is_enabled:
        return

    # Send event to Mixpanel
    mp.track(anon_id, event_name, event_data)

